package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.annotations.BelongsTo;

import java.util.List;
import java.util.UUID;
import java.util.Objects;

import androidx.core.util.ObjectsCompat;

import com.amplifyframework.core.model.AuthStrategy;
import com.amplifyframework.core.model.Model;
import com.amplifyframework.core.model.ModelOperation;
import com.amplifyframework.core.model.annotations.AuthRule;
import com.amplifyframework.core.model.annotations.Index;
import com.amplifyframework.core.model.annotations.ModelConfig;
import com.amplifyframework.core.model.annotations.ModelField;
import com.amplifyframework.core.model.query.predicate.QueryField;

import static com.amplifyframework.core.model.query.predicate.QueryField.field;

/** This is an auto generated class representing the Controller type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "Controllers", authRules = {
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ })
})
public final class Controller implements Model {
  public static final QueryField ID = field("Controller", "id");
  public static final QueryField CONTROLLER_NAME = field("Controller", "controllerName");
  public static final QueryField CONTROLLER_TO_PLATFORM = field("Controller", "controllerControllerToPlatformId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String controllerName;
  private final @ModelField(targetType="Platform") @BelongsTo(targetName = "controllerControllerToPlatformId", type = Platform.class) Platform ControllerToPlatform;
  public String getId() {
      return id;
  }
  
  public String getControllerName() {
      return controllerName;
  }
  
  public Platform getControllerToPlatform() {
      return ControllerToPlatform;
  }
  
  private Controller(String id, String controllerName, Platform ControllerToPlatform) {
    this.id = id;
    this.controllerName = controllerName;
    this.ControllerToPlatform = ControllerToPlatform;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      Controller controller = (Controller) obj;
      return ObjectsCompat.equals(getId(), controller.getId()) &&
              ObjectsCompat.equals(getControllerName(), controller.getControllerName()) &&
              ObjectsCompat.equals(getControllerToPlatform(), controller.getControllerToPlatform());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getControllerName())
      .append(getControllerToPlatform())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("Controller {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("controllerName=" + String.valueOf(getControllerName()) + ", ")
      .append("ControllerToPlatform=" + String.valueOf(getControllerToPlatform()))
      .append("}")
      .toString();
  }
  
  public static BuildStep builder() {
      return new Builder();
  }
  
  /** 
   * WARNING: This method should not be used to build an instance of this object for a CREATE mutation.
   * This is a convenience method to return an instance of the object with only its ID populated
   * to be used in the context of a parameter in a delete mutation or referencing a foreign key
   * in a relationship.
   * @param id the id of the existing item this instance will represent
   * @return an instance of this model with only ID populated
   * @throws IllegalArgumentException Checks that ID is in the proper format
   */
  public static Controller justId(String id) {
    try {
      UUID.fromString(id); // Check that ID is in the UUID format - if not an exception is thrown
    } catch (Exception exception) {
      throw new IllegalArgumentException(
              "Model IDs must be unique in the format of UUID. This method is for creating instances " +
              "of an existing object with only its ID field for sending as a mutation parameter. When " +
              "creating a new object, use the standard builder method and leave the ID field blank."
      );
    }
    return new Controller(
      id,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      controllerName,
      ControllerToPlatform);
  }
  public interface BuildStep {
    Controller build();
    BuildStep id(String id) throws IllegalArgumentException;
    BuildStep controllerName(String controllerName);
    BuildStep controllerToPlatform(Platform controllerToPlatform);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String controllerName;
    private Platform ControllerToPlatform;
    @Override
     public Controller build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new Controller(
          id,
          controllerName,
          ControllerToPlatform);
    }
    
    @Override
     public BuildStep controllerName(String controllerName) {
        this.controllerName = controllerName;
        return this;
    }
    
    @Override
     public BuildStep controllerToPlatform(Platform controllerToPlatform) {
        this.ControllerToPlatform = controllerToPlatform;
        return this;
    }
    
    /** 
     * WARNING: Do not set ID when creating a new object. Leave this blank and one will be auto generated for you.
     * This should only be set when referring to an already existing object.
     * @param id id
     * @return Current Builder instance, for fluent method chaining
     * @throws IllegalArgumentException Checks that ID is in the proper format
     */
    public BuildStep id(String id) throws IllegalArgumentException {
        this.id = id;
        
        try {
            UUID.fromString(id); // Check that ID is in the UUID format - if not an exception is thrown
        } catch (Exception exception) {
          throw new IllegalArgumentException("Model IDs must be unique in the format of UUID.",
                    exception);
        }
        
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String id, String controllerName, Platform controllerToPlatform) {
      super.id(id);
      super.controllerName(controllerName)
        .controllerToPlatform(controllerToPlatform);
    }
    
    @Override
     public CopyOfBuilder controllerName(String controllerName) {
      return (CopyOfBuilder) super.controllerName(controllerName);
    }
    
    @Override
     public CopyOfBuilder controllerToPlatform(Platform controllerToPlatform) {
      return (CopyOfBuilder) super.controllerToPlatform(controllerToPlatform);
    }
  }
  
}
