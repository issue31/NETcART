package com.ecom.netcart.repository; // Package declaration

import java.util.List; // Importing List interface

import org.springframework.data.jpa.repository.JpaRepository; // Importing JpaRepository interface from Spring Data JPA
import org.springframework.data.jpa.repository.Query; // Importing Query annotation from Spring Data JPA

import com.ecom.netcart.entity.Orders; // Importing Orders entity

/**
 * Repository interface for Orders entity.
 * Extends JpaRepository to provide CRUD operations and custom query methods.
 */
public interface OrderDao extends JpaRepository<Orders, Integer> {

    /**
     * Custom query method to find orders by user ID.
     * This method is commented out and replaced by a derived query method.
     *
     * @param userId the ID of the user whose orders are to be retrieved
     * @return a list of Orders associated with the specified user ID
     */
    //@Query("select o from Orders o where o.user.userId =:userId")
    //List<Orders> findByUserId(Integer userId);

    /**
     * Derived query method to find orders by user ID.
     * This method uses Spring Data JPA's query derivation mechanism.
     *
     * @param userId the ID of the user whose orders are to be retrieved
     * @return a list of Orders associated with the specified user ID
     */
    List<Orders> findByUserUserId(Integer userId); // Method to find orders by user ID using query derivation
}
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecom.netcart.entity.Orders;

public interface OrderDao extends JpaRepository<Orders, Integer>{

	//@Query("select o from Orders o where o.user.userId =:userId")
	//List<Orders> findByUserId(Integer userId);

	List<Orders> findByUserUserId(Integer userId);

}
