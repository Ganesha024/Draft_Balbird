/*
 * ESP32 LED Blink Sketch
 * Blinks the built-in LED on ESP32 board
 * 
 * Board: ESP32 Dev Module
 * LED Pin: GPIO 2 (built-in LED on most ESP32 boards)
 */

#define LED_PIN 2  // Built-in LED pin on most ESP32 boards

void setup() {
  // Initialize serial communication for debugging
  Serial.begin(115200);
  delay(1000); // Wait for serial monitor to connect
  
  // Set LED pin as output
  pinMode(LED_PIN, OUTPUT);
  
  Serial.println("ESP32 LED Blink Started");
  Serial.println("LED Pin: GPIO 2");
}

void loop() {
  // Turn LED ON
  digitalWrite(LED_PIN, HIGH);
  Serial.println("LED ON");
  delay(1000); // Wait for 1 second
  
  // Turn LED OFF
  digitalWrite(LED_PIN, LOW);
  Serial.println("LED OFF");
  delay(1000); // Wait for 1 second
}
