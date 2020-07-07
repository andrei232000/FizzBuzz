let i : number;
let text : string;

interface Rule
{
    rule_id : number;
    isConditionTrue(n : number) : boolean;
    apply(text : string) : string;
}

const rule3 : Rule =
{
    rule_id : 3,

    isConditionTrue(n : number) : boolean
    {
        return (n % 3 == 0);
    },

    apply(text : string) : string
    {
        return (text + "Fizz");
    }
}

const rule5 : Rule =
{
    rule_id : 5,

    isConditionTrue(n : number) : boolean
    {
        return (n % 5 == 0);
    },

    apply(text : string) : string
    {
        return (text + "Buzz");
    }
}

const rule7 : Rule =
{
    rule_id : 7,

    isConditionTrue(n : number) : boolean
    {
        return (n % 7 == 0);
    },

    apply(text : string) : string
    {
        return (text + "Bang");
    }
}

const rule11 : Rule =
{
    rule_id : 11,

    isConditionTrue(n : number) : boolean
    {
        return (n % 11 == 0);
    },

    apply(text : string) : string
    {
        return ("Bong");
    }
}

const rule13 : Rule =
{
    rule_id : 13,

    isConditionTrue(n : number) : boolean
    {
        return (n % 13 == 0);
    },

    apply(text : string) : string
    {
        const firstB : number = text.indexOf("B");

        if(firstB == -1) return (text + "Fezz");

        const fs : string = text.substr(0, firstB);
        const bs : string = text.substr(firstB);
        return (fs + "Fezz" + bs)
    }
}

const rule17 : Rule =
{
    rule_id : 17,

    isConditionTrue(n : number) : boolean
    {
        return (n % 17 == 0);
    },

    apply(text : string) : string
    {
        const fs : string[] = text.split('F');

        let k : number;
        for(k = 1; k < fs.length; k++)
        {
            fs[k] = "F" + fs[k];
        }

        const bs : string[] = fs.pop().split('B');

        for(k = 1; k < bs.length; k++)
        {
            bs[k] = "B" + bs[k];
        }

        let reversedText : string = "";

        for(k = 1; k < fs.length; k++)
        {
            reversedText = fs[k] + reversedText;
        }
        for(k = 0; k < bs.length; k++)
        {
            reversedText = bs[k] + reversedText;
        }

        return reversedText;
    }
}

const rules : Rule[] = [rule3, rule5, rule7, rule11, rule13, rule17];

for(i = 1; i <= 100; i++) //255255 applies all rules
{
    text = "";

    let j : number;
    for(j = 0; j < rules.length; j++)
    {
        if(rules[j].isConditionTrue(i))
        {
            text = rules[j].apply(text);
        }
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