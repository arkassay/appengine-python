import cgi
from google.appengine.api import users
import webapp2

MAIN_PAGE_HTML = """\

"""

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write(MAIN_PAGE_HTML)

class Leadgenerator(webapp2.RequestHandler):
    def post(self):
        self.response.write('<html><body>You wrote:<pre>')
        self.response.write(cgi.escape(self.request.get('content')))
        self.response.write('</pre></body></html>')

app = webapp2.WSGIApplication([
    ('/', MainPage)
], debug=True)
