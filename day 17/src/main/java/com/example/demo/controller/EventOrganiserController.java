package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.EventOrganiser;
import com.example.demo.service.EventOrganiserService;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/auth/organiser")
public class EventOrganiserController {

	@Autowired
    private  EventOrganiserService eventOrganiserController;

    @GetMapping
    public List<EventOrganiser> getAllOrganiserr() {
        return eventOrganiserController.getAllOrganiser();
    }

    @GetMapping("/{id}")
    public Optional<EventOrganiser> getOrganiserById(@PathVariable int id) {
        return eventOrganiserController.getOrganiserById(id);
    }

    @PostMapping("/post")
    public EventOrganiser createOrganiser(@RequestBody EventOrganiser EventOrganiserController) {
        return eventOrganiserController.createOrganiser(EventOrganiserController);
    }

    @PutMapping("/{id}")
    public EventOrganiser updateOrganiser(@PathVariable int id, @RequestBody EventOrganiser updatedEmployee) {
        return eventOrganiserController.updateOrganiser(id, updatedEmployee);
    }

    @DeleteMapping("/{id}")
    public void deleteOrganiser(@PathVariable int id) {
        eventOrganiserController.deleteOrganiser(id);
    }
}
