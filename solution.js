// determination of student grade
function grading(score){
    var gradescore;
    switch(true){
        case(score <= 100 && score >=79):
    gradescore ="A"
        break;
    case(score <=78 && score >=60):
    gradescore ="B"
        break;
    case(score <=58 && score >=49):
    gradecore ="C"
        break;
    case(score <=48 && score >=40):
    gradescore ="D"
        break;
    case(score <=39 && score >=0):
    gradescore="E" 
    }