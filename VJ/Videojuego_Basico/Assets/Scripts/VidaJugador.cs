using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class VidaJugador : MonoBehaviour
{
    //Variables globales
    private Contador contar;
    private int vidaPersonaje = 3;

    //Funcion que detecta la entrada de una colision
    void OnCollisionEnter2D(Collision2D collision){ //Esta funcion detecta cuando el collider del carro choca con el collider del otro carro
        if (collision.gameObject.tag == "AI"){ //Si el gameObject es la AI entra al if
            CausarHerida(); //Llamada a la funcion del sistema de vida
        }
        Debug.Log("Auch!"); //Imprime en la consola
    }

    //Funcion que resta una vida al jugador
    private void CausarHerida()
    {
        if(vidaPersonaje > 0)
        {
            vidaPersonaje--; //Resta uno a la variable privada vidapersonaje
            if(contar == null) //Agregamos una validación para asegurarnos de que contar no sea null
            {
                contar = FindObjectOfType<Contador>(); //Inicializamos la variable si es null
            }
            contar.RestaCorazones(vidaPersonaje); //Llama al atributo de RestaCorazones que recibe como parametro un entero
            if(vidaPersonaje==0){ //Si la vida de personaje llega cero es Game Over
                Debug.Log("Game Over");
            }
        }
    }
}
