package com.ecom.netcart.repository; // Declares the package name for organizational purposes

// Importing necessary classes from Spring Data JPA
import org.springframework.data.jpa.repository.JpaRepository; // JpaRepository provides CRUD operations and more
import org.springframework.data.jpa.repository.Query; // Query annotation for custom JPQL queries

import com.ecom.netcart.entity.Product; // Importing the Product entity class

// Defining the ProductDao interface which extends JpaRepository
public interface ProductDao extends JpaRepository<Product, Integer> {

    // Custom query to find a product by its name
    @Query("select p from Product p where p.pName = :name")
    // Method to find a Product entity by its name
    Product findByName(String name);
}
/*
Detailed Explanation:
Package Declaration:

package com.ecom.netcart.repository; // Declares the package name for organizational purposes
This line specifies the package in which the ProductDao interface is located. Packages help organize code and avoid naming conflicts.
Imports:

import org.springframework.data.jpa.repository.JpaRepository; // JpaRepository provides CRUD operations and more
import org.springframework.data.jpa.repository.Query; // Query annotation for custom JPQL queries

import com.ecom.netcart.entity.Product; // Importing the Product entity class
These lines import the necessary classes and interfaces. JpaRepository provides standard CRUD operations, Query allows for custom queries, and Product is the entity class representing the product table in the database.
Interface Declaration:

public interface ProductDao extends JpaRepository<Product, Integer> {
This declares the ProductDao interface. By extending JpaRepository, it inherits several methods for working with Product persistence, such as saving, deleting, and finding Product entities. The Integer type parameter specifies the type of the primary key of the Product entity.
Custom Query Method:

@Query("select p from Product p where p.pName = :name")
// Method to find a Product entity by its name
Product findByName(String name);
The @Query annotation defines a custom JPQL (Java Persistence Query Language) query. This query selects a Product entity where the pName field matches the provided name parameter.
Product findByName(String name); is the method signature. When this method is called, it executes the custom query defined above and returns a Product entity that matches the given name.
Summary:
JpaRepository: Provides CRUD operations and more for the Product entity.
@Query: Allows you to define custom queries using JPQL.
findByName: Custom method to find a Product by its name.
*/
