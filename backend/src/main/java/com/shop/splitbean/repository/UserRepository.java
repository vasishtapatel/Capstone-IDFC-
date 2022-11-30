package com.shop.splitbean.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.shop.splitbean.model.User;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User,String> {

    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);

}
