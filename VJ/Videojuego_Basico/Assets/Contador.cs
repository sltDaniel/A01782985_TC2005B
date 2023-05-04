using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Contador : MonoBehaviour
{
    public GameManager gameManager;
    public TextMeshProUGUI Puntos;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Puntos.text = gameManager.PuntosTotales.ToString();
    }
}
