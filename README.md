# Erste Website
A website with different functinalities.

ATENTION!

The language on the site is German. To run this, you need to install XAMPP (with MySQL) and run it.

Be careful with the Apache port. It is possible that it may not start if there's a conflict with the port.
If that's the case, you have to open the Apache configuration file (http.conf) and right on the section where you can find 
the address and Port Apache is listening (normally at lines 58 and 59). There you can change the port to a free one. Finally 
you can start Apache again and it should work.

If everything works well, you can open your browser and there you will have to type the local address to access this site, since it runs locally. For example, http://localhost:1024/website1/. The number here written is the number of the new written port on the configuration file, if you had to change it. Otherwise, the address should be http://localhost/website1/.
