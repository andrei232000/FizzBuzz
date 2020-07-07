let i : number;
let text : string;
let fezz : string;

for(i = 1; i < 1000; i++)
{
    text = "";

    //initialize
    fezz = "";

    if(i % 17 == 0) //reverse order
    {

        if(i % 7 == 0)
            text += "Bang";

        if(i % 5 == 0)
            text += "Buzz";

        if(i % 13 == 0)
        {
            text += "Fezz";
            fezz = "Fezz";
        }

        if(i % 3 == 0)
            text += "Fizz";

        //11 is still last as it overwrites everything
        if(i % 11 == 0)
            text = fezz + "Bong";
    }
    else
    {
        if (i % 3 == 0)
            text += "Fizz";

        if(i % 13 == 0) //set fezz to be added in case of overwrite
        {
            text += "Fezz";
            fezz = "Fezz";
        }

        if (i % 5 == 0)
            text += "Buzz";

        if (i % 7 == 0)
            text += "Bang";

        if(i % 11 == 0) //overwrite an add fezz if 13
            text = fezz + "Bong";
    }

    if(text == "")
    {
        console.log(i);
    }
    else
    {
        console.log(text);
    }
}
