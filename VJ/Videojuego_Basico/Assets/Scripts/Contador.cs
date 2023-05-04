using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Contador : MonoBehaviour
{
    //public GameManager gameManager;
    public TextMeshProUGUI Puntos;
    public GameObject[] vidas;

    // Update is called once per frame
    void Update()
    {
        Puntos.text = GameManager.Instance.PuntosTotales.ToString();
    }

    public void ActualizarPuntos(int puntosTotales)
    {
        Puntos.text = puntosTotales.ToString();
    }

    public void DesactivarVida(int indice)
    {
        vidas[indice].SetActive(false);
    }
}