package com.shop.splitbean.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.shop.splitbean.model.Order;
import com.shop.splitbean.model.PaymentResult;
import com.shop.splitbean.model.Product;
import com.shop.splitbean.repository.OrderRepository;
import com.shop.splitbean.repository.ProductRepository;
import com.shop.splitbean.repository.UserRepository;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {


    private final OrderRepository orderRepo;
    private final UserRepository userRepo;
    private final ProductRepository productRepo;

    public OrderController(OrderRepository orderRepo, UserRepository userRepo,ProductRepository productRepo) {
        this.orderRepo = orderRepo;
        this.userRepo = userRepo;
        this.productRepo=productRepo;
    }

    @PostMapping
    public ResponseEntity<?> addOrderItems(Authentication auth,
                                           @RequestBody Order orderReq){
        String id = userRepo.findByEmail(auth.getName()).get().get_id();
        orderReq.setUser(id);
        orderReq.setCreatedAt(Instant.now().plusSeconds(19800));      
        Order savedOrder =  orderRepo.save(orderReq);
        return ResponseEntity.status(201).body(savedOrder);
    }
    
    @PutMapping("/{id}/pay")
    public ResponseEntity<?> updateOrderPayment(@PathVariable String id,@RequestBody PaymentResult paymentResult){
    	Order order= orderRepo.findById(id).orElse(null);
    	
    	order.getOrderItems().forEach(o->{
    		Product product = productRepo.findByName(o.getName());
    		product.setCountInStock(product.getCountInStock()-o.getQty());
    		productRepo.save(product);
    	});
    	
    	
    	order.setIsPaid(true);
    	order.setPaidAt(Instant.now().plusSeconds(19800));
    	order.setPaymentResult(paymentResult);
    	order.setDeliveredAt(Instant.now().plusSeconds(451800));
    	order.setIsDelivered(true);
    	Order updatedOrder= orderRepo.save(order);
    	return ResponseEntity.status(204).body(updatedOrder);
    	
    	
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<?> addOrderItems(@PathVariable String id){
        Order order = orderRepo.findById(id).get();
        return ResponseEntity.status(201).body(order);
    }

    @GetMapping("/myorders")
    public ResponseEntity<?> getOrders(Authentication auth){
        String user_id = userRepo.findByEmail(auth.getName()).get().get_id();
        List<Order> myorders = orderRepo.findAllByUser(user_id);
        return ResponseEntity.ok(myorders);
    }
}
