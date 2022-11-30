package com.shop.splitbean.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.shop.splitbean.dto.CommentReq;
import com.shop.splitbean.dto.MessageRes;
import com.shop.splitbean.dto.TopProductRes;
import com.shop.splitbean.model.Product;
import com.shop.splitbean.model.User;
import com.shop.splitbean.repository.ProductRepository;
import com.shop.splitbean.repository.UserRepository;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api/products")
public class ProductController {



    private final ProductRepository productRepo;
    private final UserRepository userRepo;

    public ProductController(ProductRepository productRepo, UserRepository userRepo) {
        this.productRepo = productRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/top")
    public ResponseEntity<?> getTopProducts(){

        List<TopProductRes> products;
        try(Stream<TopProductRes> stream = productRepo.getTopProducts()) {
            products = stream.limit(3).collect(Collectors.toList());
        }
        System.out.println(products);
        return ResponseEntity.ok(products);
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getProducts(@RequestParam(value = "keyword") String keyword,
                                           @RequestParam(value = "pageNumber") int pageNumber){
        String key = keyword.strip();
        Pageable pageable = PageRequest.of(pageNumber - 1, 8);
        if (key.length() == 0){
            List<Product> products = productRepo.findAll();
            int page = 1;
            int pages = 2;
            Map<String, Object> result = Map.of("page", page, "pages", pages, "products", products);
            return ResponseEntity.ok(result);
        } else {
        	Product products = productRepo.findByName(keyword);
            int page = 1;
            int pages = 2;
            List<Product> searchResult=new ArrayList<>();
            searchResult.add(products);
            Map<String, Object> result = Map.of("page", page, "pages", pages, "products",searchResult );
            return ResponseEntity.ok(result);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable String id){
        Product p = productRepo.findById(id).get();
        List<Product.Review> r =  new ArrayList<>();
        p.setReviews(r);
        return ResponseEntity.ok(p);
    }

    @PostMapping("/{id}/reviews")
    public ResponseEntity<?> addComment(Authentication auth, @PathVariable String id, @RequestBody CommentReq req){
        User user = userRepo.findByEmail(auth.getName()).get();
        Optional<Product> p = productRepo.findById(id);
        if (p.isPresent()){
            Product product = p.get();
            var alreadyReviewed = product.getReviews().stream().filter(x -> x.getUser().equals(user.get_id())).count();
            if (alreadyReviewed != 0){
                return ResponseEntity.status(400).body(new MessageRes("Product already reviewed"));
            }
            Product.Review r = new Product.Review();
            r.setRating(req.getRating());
            r.setComment(req.getComment());
            r.setName(user.getName());
            r.setUser(user.get_id());
            product.getReviews().add(r);
            int numReviews = product.getNumReviews() + 1;
            Double rating = (product.getRating() + req.getRating())/numReviews;
            product.setNumReviews(numReviews);
            DecimalFormat df = new DecimalFormat("#.0");
            product.setRating(Double.valueOf(df.format(rating)));
            productRepo.save(product);
            return ResponseEntity.status(201).body(new MessageRes("Review added"));

        }
        return ResponseEntity.ok(p);
    }
}
