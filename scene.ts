interface Artist {
    id: string;
    name: string;
    genre: string;
    stage: string;
  }
  
  interface Stage {
    id: string;
    name: string;
    genres: Array<string>;
  }
  
  function assignStages(artists, stages) {
    for (let stage of stages) {
      for (let artist of artists) {
        if (stage.genres.includes(artist.genre)) {
          artist.stage = stage.id;
          break;
        }
      }
    }
  }

  interface Genre {
    stageId : string;
    name : string;
  }

  function assignStagesV2(artists, stages) {
    const genres = new Set();
    for (let stage of stages) { 
      if (!genres.has(stage.genre)){
        genres.add(stage.genre);
      }
    }
  
    for (let artist of artists) { 
      if (genres.has(artist.genre)) { 
         //associer l'id du genre à l'artiste
      }
    }
  }