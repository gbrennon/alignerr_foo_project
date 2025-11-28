package com.example;

import io.dropwizard.Application;
import io.dropwizard.Configuration;
import io.dropwizard.setup.Environment;

public class MyApp extends Application<Configuration> {
    public static class PingResource {
        @javax.ws.rs.Path("/ping")
        public String getPing() {
            return "pong";
        }
    }

    @Override
    public void run(Configuration configuration, Environment environment) throws Exception {
        System.out.println("Hello World");
        environment.jersey().register(new PingResource());
    }

    public static void main(String[] args) throws Exception {
        new MyApp().run(args);
    }
}
