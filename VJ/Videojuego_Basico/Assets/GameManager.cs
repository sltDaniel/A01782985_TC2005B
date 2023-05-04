using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
  //  public int PuntosTotales { get { return puntosTotales; } }
    public static GameManager Instance { get; private set; }

   // private int puntosTotales;

    public Contador contador;

    public int PuntosTotales {get; private set;}

    void Awake()
    {
        if(Instance == null)
        {
            Instance = this;
        }
        else
        {
            Debug.Log("Más de un Game Manager en escena");
        }
    }

    public void SumarPuntos(int puntosASumar)
    {
        PuntosTotales = PuntosTotales + puntosASumar;
       // Debug.Log(puntosTotales);
        contador.ActualizarPuntos(PuntosTotales);
    }


}