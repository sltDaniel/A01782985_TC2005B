using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class JugadorPuntos : MonoBehaviour
{
    [SerializeField] private int puntos;

    public EventHandler PuntosJugador;
    public void tomarPuntos(int cantidadPuntos)
    {
        puntos += cantidadPuntos;
        if(puntos >= 10)
        {
            PuntosJugador?.Invoke(this, EventArgs.Empty);
        }
    }
}
