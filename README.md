# mateify-appweb

#Users
  - Object
    {
      name: String
      last name : String
      email: String
      age: Number
    }
    
#GET/users
  - Devuelve todos los usuarios
     Response
     Succes: Status(200)
             Content: 
             {[
                {<user_Object>},
                {<user_Object>},
                ...
             ]}
      
      Error: Status(404) - 'No hemos encontrado ningun usuario en la base de datos.'

#GET /users/:id
        - Devuelve el usuario con la misma 'id' que el parámetro
                Required
                        URLParams {<id: Number>}
                Response
                        Succes: Status(200)
                                Content
                                        {
                                             // con 'id'
                                            {<user_Object>}
                                        }
                        Error: Status(404) - 'No hemos encontrado el usuario.'
                        
#GET /users/:id/playlist
        - Devuelve la playlist asociada al usuario con 'id'
                Response
                        Succes: Status(200)
                                Content 
                                        Songs
                                                {   
                                                    [
                                                        {<song_Object>},
                                                        {<song_Object>},
                                                        ...
                                                    ]   
                                                }
                                                
                         Error: Status(404) - 'No hemos encontrado canciones en la playlist'
                         
 #POST /users
        - Crea un nuevo objecto de usuario
                Required: Data Params (JSON)
                                {
                                   name: String,
                                   last-name: String,
                                   email: String,
                                   age: Number
                                }
                
                Response 
                        Succes: Status(200)
                                Content: 
                                        {
                                            <user_object>
                                        }
                        Error: Status(404) - 'Formato de usuario inválido'
  
  #PATCH /users/:id
        - Modifica el usuario con 'id' especificado y devuelve el objecto del nuevo usuario.
                Required: URLParams {<id: Number>}
                
                          Data Params (JSON)
                                {
                                   name: String,
                                   last-name: String,
                                   email: String,
                                   age: Number
                                }
                Response 
                        Succes: Status(200)
                                Content: { <user_object> }
                        Error: Status(404)
                               Content: {error: 'User doesn't exist'}
                               
  #DELETE /users/:id
        - Elimina el usuario con la 'id' especificada
                Required: URLParams {<id: Number>}
                
                Response 
                        Succes: Status(204)
                        Error: Status(404)
                               Content: {error: 'User doesn't exist'}
     
   
   #Songs
        - Song object
                {
                   "name": String, 
                   "album": String, 
                   "duration": String, 
                   "artist": String 
                }
  #GET /songs
        - Devuelve todas las canciones
                Response
                        Succes: Status(200)
                                Content: 
                                        {
                                          [
                                           {<song_Object>},
                                           {<song_Object>},
                                           ...
                                          ]
                                        }
   
                        Error: Status(404)
                               Content: 'No hemos encontrado canciones en la base de datos'
                               
#GET /songs/:id
        -Devuelve la cancion con la 'id' especificada
                Required: URLParams {<id: Number>}
                
                Response 
                        Succes: Status(200)
                                Content: {<song_Object>}
                        Error: Status(404)
                               Content: 'No hemos encontrado una canción con esa id'
#POST /songs
        - Agrega una canción y devuelve el objeto 'song'
                Required: Data Paramas {
                                           name: String,
                                           album: String,
                                           duration: String,
                                           artist: String
                                       }
                Response 
                        Succes: Status(200)
                                Content: { <song_Object> }
                        Error: Status(404)
                               Content: 'Error al crear la canción'
#PATCH /songs/:id
        -Modifica la canción con 'id' especificado y devuelve el objecto de la nueva canción.
                Required: URLParams {<id: Number>}
                
                          Data Params {
                                          name: String,
                                          album: String,
                                          duration: String,
                                          album: String
                                      }
                Response 
                        Succes: Status(200)
                                Content: { <song_Object> }
                        Error: Status(404)
                               Content: { error: 'La canción no existe' }
#DELETE /songs/:id
        -Borra la cancion con la  'id' especificada.
                Required: URLParams {<id: Number>}
                
                Response 
                        Succes: Status(200)
                        Error: Status(404)
                               Content: { error: no encontramos un usuario con ese 'id' }
                                
                                
                                
                        
                        
                         
                         
                        
                                
                
                
               
                        
                        
