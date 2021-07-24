import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

public class Point implements Serializable {
    private final float x;
    private final float y;
    private final float r;
    private boolean res;
    private final LocalDateTime requestTime;
    private long executionTime;

    Point(float x, float y, float r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.requestTime = LocalDateTime.now();
    }

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public float getR() {
        return r;
    }

    public void setRes(boolean res) {
        this.res = res;
    }

    public boolean getRes() {
        return res;
    }

    public LocalDateTime getRequestTime() {
        return requestTime;
    }

    public void setExecutionTime(long executionTime) {
        this.executionTime = executionTime;
    }

    public long getExecutionTime() {
        return executionTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Point that = (Point) o;

        if (x != that.x) { return false; }
        if (y != that.y) { return false; }
        if (r != that.r) { return false; }
        if (res != that.res) { return false; }
        if (!requestTime.equals(that.requestTime)) { return false; }
        if (executionTime != that.executionTime) { return false; }

        return true;

    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, r, res, requestTime, executionTime);
    }

    @Override
    public String toString() {
        return "Point{" +
                "x='" + x + '\'' +
                "y='" + y + '\'' +
                "r='" + r + '\'' +
                "res='" + res + '\'' +
                "requestTime'" + requestTime + '\'' +
                "executionTime'" + executionTime + '\'' +
                '}';
    }
}
