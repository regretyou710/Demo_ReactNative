package tw.com.entity;

import java.math.BigDecimal;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import tw.com.entity.Customer;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2022-03-06T19:59:27")
@StaticMetamodel(DiscountCode.class)
public class DiscountCode_ { 

    public static volatile SingularAttribute<DiscountCode, String> discountCode;
    public static volatile SingularAttribute<DiscountCode, BigDecimal> rate;
    public static volatile CollectionAttribute<DiscountCode, Customer> customerCollection;

}