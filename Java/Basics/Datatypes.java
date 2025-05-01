
import java.util.*;

public class Datatypes {

    public static void main(String[] args){

        // Variable, Datatypes and Type Conversion
        // video: https://www.youtube.com/watch?v=g3WDfu14rpk&list=TLPQMDEwNTIwMjUYNEHwVT5Bcw&index=1
        
        /*
         * Datatypes in Java:
         * 
         *  1. boolean: 
         *      Default: false
         *      Size: 1 bit
         *      Used to store true or false
         * 
         *  2. byte:
         *      Default: 0
         *      Size: 1 byte / 8 bits
         *      Used to store values ranging from -128 to 127 ( -2^7 to 2^7-1 )
         * 
         *  3. short:
         *      Default: 0
         *      Size: 2 bytes / 16 bits
         *      Used to store values ranging from -32768 to 32767 ( -2^15 to 2^15-1)
         *     
         *  4. int:
         *      Default: 0
         *      Size: 4 bytes / 32 bits
         *      Used to store values ranging from -2147483648 to 2147483647 ( -2^31 to 2^31-1)
         * 
         *  5. float:
         *      Default: 0.0f
         *      Size: 4 bytes / 32 bits
         *      Usefull for storing fractions, sufficient for storing 6 to 7 decimal digits only
         * 
         *  6. long:
         *      Default: 0L
         *      Size: 8 bytes / 64 bits
         *      Used to store values ranging from -9223372036854775808 to 9223372036854775807 ( -2^63 to 2^63-1)
         * 
         *  7. double:
         *      Default: 0.0d
         *      Size: 8 bytes / 64 bits
         *      Usefull for storing fractions, sufficient for storing 15 decimal digits
         * 
         *  8. char:
         *      Default: \u0000
         *      Size: 2 bytes / 16 bits
         *      Used to store a single character/letter or ASCII value
         * 
         */

         int num = 12;
        //  float floatNum = 0.32; 
         /* Lossy conversion as java recommends you to use double instead of float so as to store more digits but you can specify it by writing 'f' after the value to let java know that i accpet it as float and don't care of the extra space instead */

         float floatNum = 0.32f;
        
         double doubleNum = 0.32; /* Here it won't recommend you as double has sufficient space to store a big fraction value */
         
         long longNum = 241435;

         char chaValue = '$';

         byte byteNum = 120;

         short shortNum = 12421;

         /* You can type convert from one datatype to another */

        //  int integerNum = 24;
        //  long longNum2 = integerNum;

         // This is easy to convert but a bit different when it comes to converting from big size datatype to a small one

            // long LongNum2 = 2418;
            // int integrNum = LongNum2; 
            // Again it shows lossy conversion as it have enough space in long store so why to store it again in a datatype having smaller space
            // But if such situations occurs when you need to perform explicit type conversion, you can simply let java know by mentioning type while assigning variable
            // It is also known as casting.
            // It is done manually by programers. If we do not perform casting then java compilr returns an compile-time error.

            long LongNum2 = 2418;
            int integerNum = (int)LongNum2; 

            System.out.println(integerNum); 

    }
    
}
