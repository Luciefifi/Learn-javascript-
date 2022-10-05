let switchFunction = val =>
{
    let answer = "";
    switch(val)
    {
        case 1 :
            answer = "HTML";
            break;
            case 2:
                answer = "CSS";
                break;
                case 3 :
                    answer = "JAVA     SCRIPT";
                    break;
                    case 4 :
                        answer = "REACT JS";
                        default:
                            answer = [["react native" , "react js"],[1 , "alpha"], ["node js" ,2] ,3 ,4 ,5];
    }
    //console.log(answer);
    //return answer;
    

}
console.log(switchFunction(5));
//return switchFunction(3);