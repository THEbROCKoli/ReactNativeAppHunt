import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("loadouts.db")

const Base = {
    createLoadoutTable: () => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS loadouts (id INTEGER PRIMARY KEY AUTOINCREMENT, loadoutName VARCHAR(30), firstWeapon INTEGER, secondWeapon INTEGER)')
          })
    },
    
    newLoadout: () => {
        db.transaction(tx => {
          tx.executeSql('INSERT INTO loadouts (loadoutName, firstWeapon, secondWeapon) VALUES (?, ?, ?)',
          ["New loadout", 0, 0],        
          (txObj, error) => console.log(error))
        })
        //getLoadouts()
        //console.log(list)
      },
    
    getLoadouts: callback => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM loadouts',
          [],
          (txObj, resultSet) => {
            const loadouts = resultSet.rows._array;
            callback(loadouts);
          },
          (txObj, error) => {
            console.log('Error retrieving loadouts:', error);
          }
        );
      });
    },
    
    getSpecificLoadout: (id, callback) => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM loadouts WHERE id='+id,
            [],
            (txObj, resultSet) => {
              const loadout = resultSet.rows._array[0];
              callback(loadout);
            },
            (txObj, error) => {
              console.log('Error retrieving loadouts:', error);
            }
          );
        });
      },

    updateLoadout: (newName, id) => {
        db.transaction(tx => {
            tx.executeSql('UPDATE loadouts SET loadoutname = ? WHERE id =?',
            [newName, id])
            }
        )
    }, 
    deleteLoadout: (id) => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM loadouts WHERE id = ?', [id])
          });
    }
  };
  

export default Base;