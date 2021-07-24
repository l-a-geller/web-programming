import javax.servlet.*;
import java.io.IOException;

public class CharsetFilter implements Filter {

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain next)
            throws IOException, ServletException, NullPointerException {
        try {
            if (!request.getContentType().equals("text/css")){
                if (null != request.getCharacterEncoding()) {
                    response.setContentType("text/html; charset=UTF-8");
                    response.setCharacterEncoding("UTF-8");
                }
            }
        }catch (NullPointerException ignored){

        }finally {
            next.doFilter(request, response);
        }

    }

}
