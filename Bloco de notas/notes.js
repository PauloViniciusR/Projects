//Criando um bloco

//Classe Notepad
    class Notepad{
        constructor(){
            this.notes = [];
        }

//Add notas
    addNote(note) {
        this.notes.push(note);
    }

//Remover notas  
    removeNote(note) {
        const index = this.notes.indexOf(note);
        if(index > -1){
            this.notes.splice(index, 1);
        }
    }

//listar notas
    listNotes(){
        return this.notes;
    }

}

//instancia da classe notas
    const myNotepad = new Notepad();

    //Add new notes
        myNotepad.addNote();
        

    //Listando notas
        console.log(myNotepad.listNotes()); // ["Fazer compras", "Lavar carro", "Estudar JavaScript"]

    //Remove notes
        myNotepad.removeNote("Lavar carro");

    //Listando notas
    console.log(myNotepad.listNotes()); // ["Fazer compras", "Estudar JavaScript"]


