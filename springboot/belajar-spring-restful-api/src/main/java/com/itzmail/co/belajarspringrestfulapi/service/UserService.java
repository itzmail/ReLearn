package com.itzmail.co.belajarspringrestfulapi.service;

import com.itzmail.co.belajarspringrestfulapi.model.RegisterUserRequest;
import com.itzmail.co.belajarspringrestfulapi.repository.UserRepository;
import com.itzmail.co.belajarspringrestfulapi.entity.User;
import com.itzmail.co.belajarspringrestfulapi.security.BCrypt;
import jakarta.transaction.Transactional;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private Validator validator;

    @Transactional
    public void register(RegisterUserRequest request) {
          Set<ConstraintViolation<RegisterUserRequest>> constraintViolationSet = validator.validate(request);

          if (!constraintViolationSet.isEmpty()) {
              throw new ConstraintViolationException(constraintViolationSet);
          }

          if (userRepository.existsById(request.getUsername())) {
              throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username already exists");
          }

          User user = new User();
          user.setUsername(request.getUsername());
          user.setPassword(BCrypt.hashpw(request.getPassword(), BCrypt.gensalt()));
          user.setName(request.getName());

          userRepository.save(user);

    }
}
