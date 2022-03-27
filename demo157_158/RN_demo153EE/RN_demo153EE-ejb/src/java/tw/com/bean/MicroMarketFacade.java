/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tw.com.bean;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import tw.com.entity.MicroMarket;

/**
 *
 * @author WorkermanVM1
 */
@Stateless
public class MicroMarketFacade extends AbstractFacade<MicroMarket> implements MicroMarketFacadeLocal {

    @PersistenceContext(unitName = "RN_demo153EE-ejbPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public MicroMarketFacade() {
        super(MicroMarket.class);
    }
    
}
