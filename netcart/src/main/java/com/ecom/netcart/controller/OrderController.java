package com.ecom.netcart.controller;

// Importing necessary libraries and frameworks for order management.
import java.util.List; // Used for handling lists of input/output models.

import org.slf4j.Logger; // Provides logging capabilities for debugging and monitoring.
import org.slf4j.LoggerFactory; // Factory class to create logger instances.

import org.springframework.beans.factory.annotation.Autowired; // Enables dependency injection for services.
import org.springframework.http.HttpStatus; // Represents HTTP status codes for API responses.
import org.springframework.http.ResponseEntity; // Wraps API responses with body and status code.

import org.springframework.web.bind.annotation.CrossOrigin; // Enables Cross-Origin Resource Sharing (CORS).
import org.springframework.web.bind.annotation.GetMapping; // Maps HTTP GET requests to methods.
import org.springframework.web.bind.annotation.PathVariable; // Binds URI path variables to method parameters.
import org.springframework.web.bind.annotation.PostMapping; // Maps HTTP POST requests to methods.
import org.springframework.web.bind.annotation.PutMapping; // Maps HTTP PUT requests to methods.
import org.springframework.web.bind.annotation.RequestBody; // Maps HTTP request body to method parameters.
import org.springframework.web.bind.annotation.RestController; // Marks the class as a RESTful web service controller.

import com.ecom.netcart.exception.OrderNotFoundException; // Custom exception for missing orders.
import com.ecom.netcart.exception.UserNotFoundException; // Custom exception for missing users.
import com.ecom.netcart.model.CategoryOutputModel; // Represents category data output (unused but imported).
import com.ecom.netcart.model.OrderInputModel; // Represents input data for creating an order.
import com.ecom.netcart.model.OrderOutputModel; // Represents output data for order details.
import com.ecom.netcart.service.OrderService; // Service interface for order-related business logic.

/**
 * The OrderController class provides endpoints for managing orders
 * in the NetCart application. It handles operations like placing new
 * orders, canceling existing orders, and fetching order details by user.
 * 
 * Endpoints:
 * - Place an order: `/makeorder/{userId}`
 * - Cancel an order: `/cancelOrder/{orderId}`
 * - Fetch user orders: `/getAllOrders/{userId}`
 * 
 * Author: [Ishita Singh]
 */
@RestController // Marks this class as a RESTful controller.
@CrossOrigin("*") // Allows requests from any domain (useful for frontend-backend communication).
public class OrderController {

    /**
     * Injects the OrderService to handle order-related business logic.
     */
    @Autowired
    OrderService orderService;

    /**
     * SLF4J Logger to track method calls and responses for debugging and monitoring.
     */
    Logger logger = LoggerFactory.getLogger(OrderController.class);

    /**
     * Places a new order for a specific user.
     * 
     * Endpoint: `/makeorder/{userId}`
     * 
     * @param inputModels The list of items to be included in the order (sent in the request body).
     * @param userId The ID of the user placing the order (sent as a path variable).
     * @return A ResponseEntity containing the list of created OrderInputModels and HTTP status 200 (OK).
     * @throws UserNotFoundException if the user does not exist.
     */
    @PostMapping("/makeorder/{userId}") // Maps HTTP POST requests to this method.
    public ResponseEntity<List<OrderInputModel>> makeOrder(
            @RequestBody List<OrderInputModel> inputModels,
            @PathVariable("userId") Integer userId) throws UserNotFoundException {

        logger.info("makeOrder() method started"); // Log method start.

        // Calls the service method to place an order for the specified user.
        List<OrderInputModel> order = orderService.makeOrder(inputModels, userId);

        logger.info("Order created: {}", order); // Log the created order.
        logger.info("makeOrder() method ended"); // Log method end.

        // Returns the created orders with HTTP 200 (OK).
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    /**
     * Cancels an existing order by its ID.
     * 
     * Endpoint: `/cancelOrder/{orderId}`
     * 
     * @param orderId The ID of the order to be canceled (sent as a path variable).
     * @return A ResponseEntity containing the canceled OrderOutputModel and HTTP status 200 (OK).
     * @throws OrderNotFoundException if the order does not exist.
     */
    @PutMapping("/cancelOrder/{orderId}") // Maps HTTP PUT requests to this method.
    public ResponseEntity<OrderOutputModel> cancelOrder(
            @PathVariable("orderId") Integer orderId) throws OrderNotFoundException {

        logger.info("cancelOrder() method started"); // Log method start.

        // Calls the service method to cancel the specified order.
        OrderOutputModel canceledOrder = orderService.cancelOrder(orderId);

        logger.info("Order canceled: {}", canceledOrder); // Log the canceled order.
        logger.info("cancelOrder() method ended"); // Log method end.

        // Returns the canceled order details with HTTP 200 (OK).
        return new ResponseEntity<>(canceledOrder, HttpStatus.OK);
    }

    /**
     * Fetches all orders placed by a specific user.
     * 
     * Endpoint: `/getAllOrders/{userId}`
     * 
     * @param userId The ID of the user whose orders are to be fetched (sent as a path variable).
     * @return A ResponseEntity containing the list of OrderOutputModels and HTTP status 200 (OK).
     * @throws UserNotFoundException if the user does not exist.
     */
    @GetMapping("/getAllOrders/{userId}") // Maps HTTP GET requests to this method.
    public ResponseEntity<List<OrderOutputModel>> getOrderByUserId(
            @PathVariable("userId") Integer userId) throws UserNotFoundException {

        logger.info("getOrderByUserId() method started"); // Log method start.

        // Calls the service method to retrieve orders for the specified user.
        List<OrderOutputModel> orders = orderService.getOrderByUserId(userId);

        logger.info("Orders retrieved: {}", orders); // Log the retrieved orders.
        logger.info("getOrderByUserId() method ended"); // Log method end.

        // Returns the list of orders with HTTP 200 (OK).
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
