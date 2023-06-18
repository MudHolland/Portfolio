from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Open the website in a new Chrome window
driver = webdriver.Chrome()
driver.get("https://server.growatt.com/login")

# Find the username input field and type "Dennisulijn"
username_field = driver.find_element_by_name("username")
username_field.send_keys("Dennisulijn")

# Wait for a few seconds to observe the behavior
time.sleep(5)

# Close the browser window
driver.quit()
