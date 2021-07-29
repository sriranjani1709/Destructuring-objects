const data = async () => {
    const info =  await fetch("https://60c98aa8772a760017203b57.mockapi.io/users");
    const users = await info.json();
    var getName = ({name}) => name;
    console.log(users.map(getName));
    const getNameWithR = ({name}) => name.startsWith("r") || name.startsWith("R");
    console.log("Names starts with R :",users.filter(getNameWithR).map(getName));
    }
    data();
    
    