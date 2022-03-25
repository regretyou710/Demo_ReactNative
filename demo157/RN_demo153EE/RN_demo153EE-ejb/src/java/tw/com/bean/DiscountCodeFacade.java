/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tw.com.bean;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tw.com.entity.DiscountCode;

/**
 *
 * @author WorkermanVM1
 */
@Stateless
public class DiscountCodeFacade extends AbstractFacade<DiscountCode> implements DiscountCodeFacadeLocal {

    @PersistenceContext(unitName = "RN_demo153EE-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public DiscountCodeFacade() {
        super(DiscountCode.class);
    }
    
}
