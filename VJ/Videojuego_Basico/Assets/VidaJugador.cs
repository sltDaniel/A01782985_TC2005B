using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class VidaJugador : MonoBehaviour
{

    [SerializeField] private int vida;
    public event EventHandler MuerteJugador;

    public void Da�o(int CantidadDa�o)
    {
        vida -= CantidadDa�o;
        if(vida <= 0)
        {
            MuerteJugador?.Invoke(this, EventArgs.Empty);
            Destroy(gameObject);
        }
    }
}
