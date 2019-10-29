/**
 * Heap Sort
 */
public class DuplicateElements {

    private static int[] array = { 4, 6, 9, 2, 10, 56, 12, 5, 1, 17, 14 };

    public static void main(String[] args) {
        dupElementFinder();
    }

    public static boolean dupElementFinder() {
        for (int i = 0; i < array.length; i++) {
            for (int j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    return false;
                }
            }
        }
        return true;
    }

}
