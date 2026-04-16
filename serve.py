import http.server
import os

port = int(os.environ.get("PORT", 3002))
os.chdir(os.path.dirname(os.path.abspath(__file__)))

handler = http.server.SimpleHTTPRequestHandler
httpd = http.server.HTTPServer(("", port), handler)
print(f"Serving on port {port}")
httpd.serve_forever()
