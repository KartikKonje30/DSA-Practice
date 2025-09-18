
public class test{
    public static void main(String[] args) {
        
        int n = 4;

        // NxNPattern(n);
        // NxNNumberPattern(n);
        // IncrementalPattern(n);
        // DecrementalPattern(n);
        PerfectPiramid(n);

    }

    public static void NxNPattern(int n){
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                System.out.print(n);
            }
            System.out.println();
        }
    }

    public static void NxNNumberPattern(int n){
        for(int i=1; i<=n; i++){
            for(int j=1; j<=n; j++){
                System.out.print(j);
                // System.out.print(i);
            }
            System.out.println();
        }
    }

    public static void IncrementalPattern(int n){
        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print(j);
                // System.out.print(i);
            }
            System.out.println();
        }
    }

    public static void DecrementalPattern(int n){
        for(int i=n; i>0; i--){
            for(int j=1; j<=i; j++){
                System.out.print(j);
                // System.out.print(i);
            }
            System.out.println();
        }
    }

    public static void PerfectPiramid(int n){
        for(int i=0; i<n; i++){
            for(int j=0; j<(n-i)-1; j++){
                System.out.print(" ");
                // System.out.print(i);
            }
            for(int j=0; j<(2*i)+1; j++){
                System.out.print("*");
                // System.out.print(i);
            }
            for(int j=0; j<(n-i)-1; j++){
                System.out.print(" ");
                // System.out.print(i);
            }
            System.out.println();
        }
    }

}