import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class DBUtil {
    static EntityManager em;
    static void init() {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("p");
        em = entityManagerFactory.createEntityManager();
    }
}
