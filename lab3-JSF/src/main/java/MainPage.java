import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.persistence.Query;
import java.io.Serializable;
import java.util.List;

@ManagedBean(name = "main", eager = true)
@SessionScoped
public class MainPage implements Serializable {

    public List<Point> getPoints(){
        DBUtil.init();
        DBUtil.em.getTransaction().begin();
        List<Point> list = DBUtil.em.createQuery("SELECT c FROM Points AS c", Point.class).getResultList();
        DBUtil.em.getTransaction().commit();
        return list;
    }

    private int x = 0;
    private String y = "0";
    private int r = 5;
    private boolean res = false;
    private float svgX;
    private float svgY;

    public int getX() {
        return x;
    }
    public String getY() {
        return y;
    }
    public float getSvgX() { return svgX; }
    public float getSvgY() { return svgY; }
    public int getR() {
        return r;
    }
    public boolean getRes() { return res; }

    public void setX(int x) {
        this.x = x;
    }
    public void setY(String y) {
        this.y = y;
    }
    public void setSvgX(float x) { this.svgX = x; }
    public void setSvgY(float y) { this.svgY = y; }
    public void setR(int r) {
        this.r = r;
    }
    public void setRes(boolean res) { this.res = res; }

    public void addSVGPoint(){
        insertPoint(svgX, svgY, r/2.0f);
    }

    public void addPoint(){
        float px = x/2.0f;
        float py = Float.parseFloat(y);
        float pr = r/2.0f;
        insertPoint(px, py, pr);
    }

    public void clearTable(){
        DBUtil.em.getTransaction().begin();
        Query query = DBUtil.em.createQuery("DELETE FROM Points");
        query.executeUpdate();
        DBUtil.em.getTransaction().commit();
    }

    private void insertPoint(float x, float y, float r){
        FacesMessage message = null;
        if (x<-3 || x>3) message =new FacesMessage("X должен быть в пределах: [-3;3]");
        if (y<=-3 || y>=5) message =new FacesMessage("Y должен быть в пределах: (-3;5)");
        if (r<1 || r>4) message =new FacesMessage("R должен быть в пределах: [1;4]");
        if (message != null){
            message.setSeverity(FacesMessage.SEVERITY_ERROR);
        }else {
            Point p = new Point(x, y, r);
            setRes(hitsFigure(x, y, r));
            p.setRes(getRes());
            DBUtil.em.getTransaction().begin();
            DBUtil.em.persist(p);
            DBUtil.em.getTransaction().commit();
        }
    }

    public boolean hitsFigure(float x, float y, float r){
        return x * x + y * y <= r / 2.0F * r / 2.0F && x >= 0.0F && y >= 0.0F ||
                y > -x - r/2 && x <= 0.0F && y <= 0.0F ||
                x >= 0.0F && y <= 0.0F && x <= r && y >= -r/2;
    }
}
