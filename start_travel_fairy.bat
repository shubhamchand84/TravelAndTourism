@echo off
echo Starting Travel Fairy Application...

echo Starting backend server...
start "Travel Fairy Backend" "c:\Users\ASUS\Desktop\travelAndTourism\start_travel_diary_backend.bat"

echo Waiting for backend to initialize...
timeout /t 5 /nobreak > nul

echo Starting frontend...
start "Travel Fairy Frontend" "c:\Users\ASUS\Desktop\travelAndTourism\start_travel_diary_frontend.bat"

echo Travel Fairy application is starting up!
echo The application will be available at http://localhost:5174
echo.
echo You can now close this window and use the application.