import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import javax.persistence.*;

@Entity(name = "Points")

public class Point implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private float x;
    private float y;
    private float r;
    private boolean res;
    private LocalDateTime requestTime;

    public Point(float x, float y, float r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.requestTime = LocalDateTime.now();
    }

    public Point() {}

    public Integer getId() { return id; }

    public float getX() {
        return this.x;
    }

    public float getY() {
        return this.y;
    }

    public float getR() {
        return this.r;
    }

    public boolean getRes() {
        return this.res;
    }

    public void setId(Integer id) { this.id = id; }

    public void setRes(boolean res) {
        this.res = res;
    }

    public LocalDateTime getRequestTime() {
        return this.requestTime;
    }

    public boolean equals(Object o) {
        if (this == o) {
            return true;
        } else if (o != null && this.getClass() == o.getClass()) {
            Point that = (Point)o;
            if (this.x != that.x) {
                return false;
            } else if (this.y != that.y) {
                return false;
            } else if (this.r != that.r) {
                return false;
            } else if (this.res != that.res) {
                return false;
            } else if (!this.requestTime.equals(that.requestTime)) {
                return false;
            }
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.x, this.y, this.r, this.res, this.requestTime);
    }

    public String toString() {
        return "Point{x='" + this.x + '\'' + "y='" + this.y + '\'' + "r='" + this.r + '\'' + "res='" + this.res + '\'' + "requestTime'" + this.requestTime + '\'' + "executionTime'" + '}';
    }
}
