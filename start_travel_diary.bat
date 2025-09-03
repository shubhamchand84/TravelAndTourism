@echo off
echo Starting Travel Diary Application...

echo.
echo Starting Backend Server...
cd "c:\Users\ASUS\Desktop\travelAndTourism\Personal-Travel-Diary-App\backend"
start cmd /k npm start

echo.
echo Starting Frontend...
cd "c:\Users\ASUS\Desktop\travelAndTourism\Personal-Travel-Diary-App\frontend"
start cmd /k npm run dev -- --port 5174

echo.
echo Travel Diary Application started successfully!
echo Backend running on http://localhost:5000
echo Frontend running on http://localhost:5174
echo.
echo You can access the Travel Diary at: http://localhost:5174/public