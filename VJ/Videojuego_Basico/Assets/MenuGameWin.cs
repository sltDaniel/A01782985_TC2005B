using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using System;

public class MenuGameWin : MonoBehaviour
{
    [SerializeField] private GameObject menuGameWin;
    private JugadorPuntos jugadorPuntos;

    private void Start()
    {
        jugadorPuntos = GameObject.FindGameObjectWithTag("Player").GetComponent<JugadorPuntos>();
        jugadorPuntos.PuntosJugador += ActivarMenu;
    }

    private void ActivarMenu(object sender, EventArgs e)
    {
        menuGameWin.SetActive(true);
    }

    public void Reniciar()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }

    public void MenuInicial(string nombre)
    {
        SceneManager.LoadScene(nombre);
    }

    public void Salir()
    {
        UnityEditor.EditorApplication.isPlaying = false;
        Application.Quit();
    }
}
