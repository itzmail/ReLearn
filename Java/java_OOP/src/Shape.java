class Shape {
    int getCorner() {
        return 0;
    }
}

class Rectangle extends Shape {
    int getCorener(){
        return 4;
    }

    int getParentCorner() {
        return super.getCorner();
    }
}