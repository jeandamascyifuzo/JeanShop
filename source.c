/*
 * Group member:
 *            CYIFUZO Jean Damascene      218002913
 *            NTAWUYIRUSHINTEGE Patrick   218012682
 * 
 * File:   source.c
 * Author: Teacher
 *
 * Created on July 18, 2021, 1:32 AM
 */

#pragma config FOSC = EXTRC     // Oscillator Selection bits (RC oscillator)
#pragma config WDTE = ON        // Watchdog Timer Enable bit (WDT enabled)
#pragma config PWRTE = OFF      // Power-up Timer Enable bit (PWRT disabled)
#pragma config BOREN = ON       // Brown-out Reset Enable bit (BOR enabled)
#pragma config LVP = ON         // Low-Voltage (Single-Supply) In-Circuit Serial Programming Enable bit (RB3/PGM pin has PGM function; low-voltage programming enabled)
#pragma config CPD = OFF        // Data EEPROM Memory Code Protection bit (Data EEPROM code protection off)
#pragma config WRT = OFF        // Flash Program Memory Write Enable bits (Write protection off; all program memory may be written to by EECON control)
#pragma config CP = OFF         // Flash Program Memory Code Protection bit (Code protection off)

#define _XTAL_FREQ 8000000      //8Mhz osillator value

#include <xc.h>

void main(void) {
    TRISB = 0b00000000;        //making port B output
    while(1)
    {
        PORTBbits.RB0 = 1;     //blinking first led on
        PORTBbits.RB1 = 0;     // turning off second led
        PORTBbits.RB2 = 0;     //turning off third led
        __delay_ms (1000);     //1sec delay
                
        PORTBbits.RB0 = 0;    //turning off first led
        PORTBbits.RB1 = 1;    //blinking second led on
        PORTBbits.RB2 = 0;    //turning off third led
        __delay_ms (500);     //1/2sec delay
        
        PORTBbits.RB0 = 0;   //turning off first led
        PORTBbits.RB1 = 0;   // turning off second led
        PORTBbits.RB2 = 1;   //blinking third led on
        __delay_ms (1000);   //1sec delay
       
    }
}
