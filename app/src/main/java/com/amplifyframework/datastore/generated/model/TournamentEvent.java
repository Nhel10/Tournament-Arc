package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.temporal.Temporal;

import java.util.List;
import java.util.UUID;
import java.util.Objects;

import androidx.core.util.ObjectsCompat;

import com.amplifyframework.core.model.Model;
import com.amplifyframework.core.model.annotations.Index;
import com.amplifyframework.core.model.annotations.ModelConfig;
import com.amplifyframework.core.model.annotations.ModelField;
import com.amplifyframework.core.model.query.predicate.QueryField;

import static com.amplifyframework.core.model.query.predicate.QueryField.field;

/** This is an auto generated class representing the TournamentEvent type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "TournamentEvents")
public final class TournamentEvent implements Model {
  public static final QueryField ID = field("TournamentEvent", "id");
  public static final QueryField EVENT_NAME = field("TournamentEvent", "eventName");
  public static final QueryField DESCRIPTION = field("TournamentEvent", "description");
  public static final QueryField ORGANIZING_BODY = field("TournamentEvent", "organizingBody");
  public static final QueryField LOCATION = field("TournamentEvent", "location");
  public static final QueryField START_DATE = field("TournamentEvent", "startDate");
  public static final QueryField END_DATE = field("TournamentEvent", "endDate");
  public static final QueryField TOTAL_PRIZE_MONEY = field("TournamentEvent", "totalPrizeMoney");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String eventName;
  private final @ModelField(targetType="String") String description;
  private final @ModelField(targetType="String") String organizingBody;
  private final @ModelField(targetType="String") String location;
  private final @ModelField(targetType="AWSDate") Temporal.Date startDate;
  private final @ModelField(targetType="AWSDate") Temporal.Date endDate;
  private final @ModelField(targetType="Float") Double totalPrizeMoney;
  public String getId() {
      return id;
  }
  
  public String getEventName() {
      return eventName;
  }
  
  public String getDescription() {
      return description;
  }
  
  public String getOrganizingBody() {
      return organizingBody;
  }
  
  public String getLocation() {
      return location;
  }
  
  public Temporal.Date getStartDate() {
      return startDate;
  }
  
  public Temporal.Date getEndDate() {
      return endDate;
  }
  
  public Double getTotalPrizeMoney() {
      return totalPrizeMoney;
  }
  
  private TournamentEvent(String id, String eventName, String description, String organizingBody, String location, Temporal.Date startDate, Temporal.Date endDate, Double totalPrizeMoney) {
    this.id = id;
    this.eventName = eventName;
    this.description = description;
    this.organizingBody = organizingBody;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalPrizeMoney = totalPrizeMoney;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      TournamentEvent tournamentEvent = (TournamentEvent) obj;
      return ObjectsCompat.equals(getId(), tournamentEvent.getId()) &&
              ObjectsCompat.equals(getEventName(), tournamentEvent.getEventName()) &&
              ObjectsCompat.equals(getDescription(), tournamentEvent.getDescription()) &&
              ObjectsCompat.equals(getOrganizingBody(), tournamentEvent.getOrganizingBody()) &&
              ObjectsCompat.equals(getLocation(), tournamentEvent.getLocation()) &&
              ObjectsCompat.equals(getStartDate(), tournamentEvent.getStartDate()) &&
              ObjectsCompat.equals(getEndDate(), tournamentEvent.getEndDate()) &&
              ObjectsCompat.equals(getTotalPrizeMoney(), tournamentEvent.getTotalPrizeMoney());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getEventName())
      .append(getDescription())
      .append(getOrganizingBody())
      .append(getLocation())
      .append(getStartDate())
      .append(getEndDate())
      .append(getTotalPrizeMoney())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("TournamentEvent {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("eventName=" + String.valueOf(getEventName()) + ", ")
      .append("description=" + String.valueOf(getDescription()) + ", ")
      .append("organizingBody=" + String.valueOf(getOrganizingBody()) + ", ")
      .append("location=" + String.valueOf(getLocation()) + ", ")
      .append("startDate=" + String.valueOf(getStartDate()) + ", ")
      .append("endDate=" + String.valueOf(getEndDate()) + ", ")
      .append("totalPrizeMoney=" + String.valueOf(getTotalPrizeMoney()))
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
  public static TournamentEvent justId(String id) {
    try {
      UUID.fromString(id); // Check that ID is in the UUID format - if not an exception is thrown
    } catch (Exception exception) {
      throw new IllegalArgumentException(
              "Model IDs must be unique in the format of UUID. This method is for creating instances " +
              "of an existing object with only its ID field for sending as a mutation parameter. When " +
              "creating a new object, use the standard builder method and leave the ID field blank."
      );
    }
    return new TournamentEvent(
      id,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      eventName,
      description,
      organizingBody,
      location,
      startDate,
      endDate,
      totalPrizeMoney);
  }
  public interface BuildStep {
    TournamentEvent build();
    BuildStep id(String id) throws IllegalArgumentException;
    BuildStep eventName(String eventName);
    BuildStep description(String description);
    BuildStep organizingBody(String organizingBody);
    BuildStep location(String location);
    BuildStep startDate(Temporal.Date startDate);
    BuildStep endDate(Temporal.Date endDate);
    BuildStep totalPrizeMoney(Double totalPrizeMoney);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String eventName;
    private String description;
    private String organizingBody;
    private String location;
    private Temporal.Date startDate;
    private Temporal.Date endDate;
    private Double totalPrizeMoney;
    @Override
     public TournamentEvent build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new TournamentEvent(
          id,
          eventName,
          description,
          organizingBody,
          location,
          startDate,
          endDate,
          totalPrizeMoney);
    }
    
    @Override
     public BuildStep eventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    
    @Override
     public BuildStep description(String description) {
        this.description = description;
        return this;
    }
    
    @Override
     public BuildStep organizingBody(String organizingBody) {
        this.organizingBody = organizingBody;
        return this;
    }
    
    @Override
     public BuildStep location(String location) {
        this.location = location;
        return this;
    }
    
    @Override
     public BuildStep startDate(Temporal.Date startDate) {
        this.startDate = startDate;
        return this;
    }
    
    @Override
     public BuildStep endDate(Temporal.Date endDate) {
        this.endDate = endDate;
        return this;
    }
    
    @Override
     public BuildStep totalPrizeMoney(Double totalPrizeMoney) {
        this.totalPrizeMoney = totalPrizeMoney;
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
    private CopyOfBuilder(String id, String eventName, String description, String organizingBody, String location, Temporal.Date startDate, Temporal.Date endDate, Double totalPrizeMoney) {
      super.id(id);
      super.eventName(eventName)
        .description(description)
        .organizingBody(organizingBody)
        .location(location)
        .startDate(startDate)
        .endDate(endDate)
        .totalPrizeMoney(totalPrizeMoney);
    }
    
    @Override
     public CopyOfBuilder eventName(String eventName) {
      return (CopyOfBuilder) super.eventName(eventName);
    }
    
    @Override
     public CopyOfBuilder description(String description) {
      return (CopyOfBuilder) super.description(description);
    }
    
    @Override
     public CopyOfBuilder organizingBody(String organizingBody) {
      return (CopyOfBuilder) super.organizingBody(organizingBody);
    }
    
    @Override
     public CopyOfBuilder location(String location) {
      return (CopyOfBuilder) super.location(location);
    }
    
    @Override
     public CopyOfBuilder startDate(Temporal.Date startDate) {
      return (CopyOfBuilder) super.startDate(startDate);
    }
    
    @Override
     public CopyOfBuilder endDate(Temporal.Date endDate) {
      return (CopyOfBuilder) super.endDate(endDate);
    }
    
    @Override
     public CopyOfBuilder totalPrizeMoney(Double totalPrizeMoney) {
      return (CopyOfBuilder) super.totalPrizeMoney(totalPrizeMoney);
    }
  }
  
}
