/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tw.com.service;

import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import tw.com.bean.CustomerFacadeLocal;
import tw.com.entity.Customer;

/**
 *
 * @author WorkermanVM1
 */
@Path("service")
public class CustomerService {

    CustomerFacadeLocal customerFacade = lookupCustomerFacadeLocal();

    private CustomerFacadeLocal lookupCustomerFacadeLocal() {
        try {
            Context c = new InitialContext();
            return (CustomerFacadeLocal) c.lookup("java:global/RN_demo153EE/RN_demo153EE-ejb/CustomerFacade!tw.com.bean.CustomerFacadeLocal");
        } catch (NamingException ne) {
            Logger.getLogger(getClass().getName()).log(Level.SEVERE, "exception caught", ne);
            throw new RuntimeException(ne);
        }
    }

    @Path("querycustomer/key/{id}/rawdata")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Customer queryCustomer(@PathParam("id") String id) {
        return customerFacade.find(new Integer(id));
    }
}
