class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    fazerBarulho() {
      console.log(`${this.nome} faz um barulho.`);
    }
  }
  
  
  class Mamifero extends Animal {
    constructor(nome, idade, tipo) {
      super(nome, idade);
      this.tipo = tipo;
    }
  
    amamentar() {
      console.log(`${this.nome} é um mamífero e pode amamentar.`);
    }
  }
  
  
  class Ave extends Animal {
    constructor(nome, idade, tipo) {
      super(nome, idade);
      this.tipo = tipo;
    }
  
    voar() {
      console.log(`${this.nome} é uma ave e pode voar.`);
    }
  }
  
  
  class Cachorro extends Mamifero {
    latir() {
      console.log(`${this.nome} é um cachorro e late.`);
    }
  }
  
  
  class Papagaio extends Ave {
    falar() {
      console.log(`${this.nome} é um papagaio e fala.`);
    }
  
    static descricao() {
      console.log("Papagaios são aves coloridas e inteligentes.");
    }
  }
  
  
  const cachorro = new Cachorro("Rex", 3, "Labrador");
  cachorro.fazerBarulho();
  cachorro.amamentar();
  cachorro.latir();
  
  const papagaio = new Papagaio("Loro", 5, "Ararauna");
  papagaio.fazerBarulho();
  papagaio.voar();
  papagaio.falar();
  
  Papagaio.descricao();