import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Определяет тип запроса, и, в зависимости от того,
 * содержит ли запрос информацию о координатах точки и радиусе,
 * делегирует его обработку AreaCheckServlet
 */
public class ControllerServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long requestStartTime = System.nanoTime();
        request.setAttribute("time", requestStartTime);
        super.service(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");

        if (request.getParameter("r") != null && request.getParameter("y") != null && request.getParameter("x0") != null){
            RequestDispatcher dispatcher = request.getRequestDispatcher("area");
            dispatcher.forward(request, response);
        }else {
            response.getWriter().println("Данные координат и радиуса не получены");
        }
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            if (request.getParameter("key").equals("show")){
                PrintWriter out = response.getWriter();
                AreaCheckServlet.printTable(out);
            }
        }catch (NullPointerException e){
            RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
            dispatcher.forward(request, response);
        }
    }

    @Override
    public void doHead(HttpServletRequest request, HttpServletResponse response) {
        AreaCheckServlet.clearPoints();
    }
}
