using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class VidaJugador : MonoBehaviour
{

    [SerializeField] private int vida;
    public event EventHandler MuerteJugador;

    public void Daño(int CantidadDaño)
    {
        vida -= CantidadDaño;
        if(vida <= 0)
        {
            MuerteJugador?.Invoke(this, EventArgs.Empty);
            Destroy(gameObject);
        }
    }
}
