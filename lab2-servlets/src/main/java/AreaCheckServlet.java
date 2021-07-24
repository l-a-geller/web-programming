import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedList;

/**
 * Осуществляет проверку попадания точки в область на координатной плоскости и
 * формирует HTML-страницу с результатами проверки. Обрабатывает все запросы,
 * содержащие сведения о координатах точки и радиусе области
 */
public class AreaCheckServlet extends HttpServlet {

    private static LinkedList<Point> points = new LinkedList<>();

    public static void clearPoints(){
        points.clear();
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        try {

            float y = Float.parseFloat(request.getParameter("y"));
            float r = Float.parseFloat(request.getParameter("r"));

            if (y > 5 || y < -3 || r < 1 || r > 3){
                throw new ServletException();
            }

            String xNum; float nextX;
            for (int i=0; i<9; i++){
                try{
                    xNum = "x" + i;
                    nextX = Float.parseFloat(request.getParameter(xNum));

                    if (y > 5 || y < -3 ){
                        throw new ServletException();
                    }

                    Point point = new Point(nextX, y, r);
                    point.setRes(hitsFigure(nextX, y, r));
                    point.setExecutionTime( ( System.nanoTime() - Long.parseLong(request.getAttribute("time").toString()) ) / 1000 );
                    points.add(point);

                }catch (NumberFormatException | NullPointerException e){break;}
            }

            printTable(response.getWriter());
        }catch (Exception e){
            response.getWriter().println("Введенные данные некорректны");
        }
    }

    private boolean hitsFigure(float x, float y, float r){
        return ((x * x + y * y) <= r/2 * r/2 && x <= 0 && y <= 0) ||
                (y > (x - r) && x >= 0 && y <= 0) ||
                (x<=0 && y>=0 && x>=-r && y<=r );
    }

    static void printTable(PrintWriter out){
        for (Point point: points){
            out.println("<tr>");
            out.println("<td>" + point.getX() + "</td>");
            out.println("<td>" + point.getY() + "</td>");
            out.println("<td>" + point.getR() + "</td>");
            out.println("<td>" + point.getRes() + "</td>");
            out.println("<td>" + point.getRequestTime() + "</td>");
            out.println("<td>" + point.getExecutionTime() + " мкс" + "</td>");
            out.println("</tr>");
        }
    }
}
