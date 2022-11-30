package com.shop.splitbean.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.shop.splitbean.model.Order;

import java.util.List;

public interface OrderRepository extends MongoRepository<Order,String> {

    List<Order> findAllByUser(String user_id);
}
