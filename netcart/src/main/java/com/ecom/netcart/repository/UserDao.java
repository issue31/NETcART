package com.ecom.netcart.repository; // Declares the package name for organizational purposes

// Importing necessary classes from Spring Data JPA
import org.springframework.data.jpa.repository.JpaRepository; // JpaRepository provides CRUD operations and more
import org.springframework.data.jpa.repository.Query; // Query annotation for custom JPQL queries

import com.ecom.netcart.entity.User; // Importing the User entity class

// Defining the UserDao interface which extends JpaRepository
public interface UserDao extends JpaRepository<User, Integer> {

    // Custom query to find a user by their email
    @Query("select u from User u where u.email =:emailId")
    // Method to find a User entity by its email
    User getEmail(String emailId);
}
/*Detailed Explanation:
Package Declaration:

package com.ecom.netcart.repository; // Declares the package name for organizational purposes
This line specifies the package in which the UserDao interface is located. Packages help organize code and avoid naming conflicts.
Imports:

import org.springframework.data.jpa.repository.JpaRepository; // JpaRepository provides CRUD operations and more
import org.springframework.data.jpa.repository.Query; // Query annotation for custom JPQL queries

import com.ecom.netcart.entity.User; // Importing the User entity class
These lines import the necessary classes and interfaces. JpaRepository provides standard CRUD operations, Query allows for custom queries, and User is the entity class representing the user table in the database.
Interface Declaration:

public interface UserDao extends JpaRepository<User, Integer> {
This declares the UserDao interface. By extending JpaRepository, it inherits several methods for working with User persistence, such as saving, deleting, and finding User entities. The Integer type parameter specifies the type of the primary key of the User entity.
Custom Query Method:

@Query("select u from User u where u.email =:emailId")
// Method to find a User entity by its email
User getEmail(String emailId);
The @Query annotation defines a custom JPQL (Java Persistence Query Language) query. This query selects a User entity where the email field matches the provided emailId parameter.
User getEmail(String emailId); is the method signature. When this method is called, it executes the custom query defined above and returns a User entity that matches the given email.
Summary:
JpaRepository: Provides CRUD operations and more for the User entity.
@Query: Allows you to define custom queries using JPQL.
getEmail: Custom method to find a User by their email.*/
