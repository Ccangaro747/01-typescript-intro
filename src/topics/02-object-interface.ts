const skills: string[] = ['JS', 'React'];


interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


const strider: Character ={
    name: 'Strider',
    hp: 100,
    skills: ['run', 'hide']
};

strider.hometown = 'Gondor';

console.table(strider);


export{

};